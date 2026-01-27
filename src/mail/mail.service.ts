import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { SubscriberDocument } from 'src/subscribers/schemas/subscriber.schema';
import { JobDocument } from 'src/jobs/schemas/job.schema';
import { Subscriber } from 'src/subscribers/schemas/subscriber.schema';
import { Job } from 'src/jobs/schemas/job.schema';
import { Company, CompanyDocument } from 'src/companies/schemas/company.schema';

@Injectable()
export class MailService {
  constructor(
    @InjectModel(Subscriber.name)
    private readonly subscriberModel: SoftDeleteModel<SubscriberDocument>,
    @InjectModel(Job.name)
    private readonly jobModel: SoftDeleteModel<JobDocument>,
    @InjectModel(Company.name)
    private readonly companyModel: SoftDeleteModel<CompanyDocument>,
  ) {}

  async getSubscribersWithMatchingJobs() {
    const subscribers = await this.subscriberModel.find({});
    const result = [];

    for (const subs of subscribers) {
      const subsSkills = subs.skills;
      const jobWithMatchingSkills = await this.jobModel.find({
        skills: { $in: subsSkills },
      });

      // Format jobs theo đúng format yêu cầu
      const formattedJobs = await Promise.all(
        jobWithMatchingSkills.map(async (job) => {
          let companyName = '';
          
          // Lấy tên company từ company._id nếu có
          if (job.company && job.company._id) {
            const company = await this.companyModel.findById(
              job.company._id.toString(),
            );
            companyName = company?.name || '';
          }

          return {
            name: job.name,
            company: companyName,
            salary: job.salary?.toString() || '',
            skills: job.skills || [],
          };
        }),
      );

      result.push({
        subscriber: {
          name: subs.name,
          email: subs.email,
        },
        jobs: formattedJobs,
      });
    }

    return result;
  }

  create(createMailDto: CreateMailDto) {
    return 'This action adds a new mail';
  }

  findAll() {
    return `This action returns all mail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mail`;
  }

  update(id: number, updateMailDto: UpdateMailDto) {
    return `This action updates a #${id} mail`;
  }

  remove(id: number) {
    return `This action removes a #${id} mail`;
  }
}
